import * as _vscode from "vscode";

declare global {
  const tsvscode: {
    postMessage: ({ type: string, value: an }) => void;
    getState: () => any;
    setState: (state: any) => void;
  };
  const apiBaseUrl: string;
  // const accessToken: string;
}
