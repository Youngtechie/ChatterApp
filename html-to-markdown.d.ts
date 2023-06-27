declare module 'html-to-markdown' {
    const htmlToMarkdown: {
      convert: (html: string) => string;
    };
    export default htmlToMarkdown;
  }