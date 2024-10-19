// utils/richTextConverter.ts

export const convertRichTextToJSON = (richText: string): string => {
    return JSON.stringify({ content: richText });
  };
  