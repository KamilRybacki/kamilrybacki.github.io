import React from 'react';

import rangeParser from 'parse-numeric-range';
import SyntaxHighlighter from './SyntaxHighlighter';

const highlightFunction: CallableFunction = (node: any) => {
  return (lineId: number) => {
    if (node?.data?.meta) {
      const regexp = /{([\d,-]+)}/;
      const metadata = node.data.meta?.replace(/\s/g, '');
      const strlineNumbers = regexp?.test(metadata) ?
                             regexp?.exec(metadata)[1] :
                             '0';
      const highlightLines = rangeParser(strlineNumbers);
      const highlight = highlightLines;
      const data: string | null = highlight.includes(lineId) ?
                    'highlight' :
                    null;
      return {data};
    } else return {};
  };
};

interface codeFunctionInterface {
  node: any;
  children: JSX.Element | JSX.Element[];
}

const StyledMarkdownComponents: object = {
  code({node, children}: codeFunctionInterface) {
    const match = /language-(\w+)/.exec('codeStyle' || '');
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        hasMeta={node?.data?.meta}
        lineProps={highlightFunction(node)}
      >
        {children}
      </SyntaxHighlighter>
    ) : (<code className='codeStyle'>{children}</code>);
  },
};

export default StyledMarkdownComponents;