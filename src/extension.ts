import * as vscode from 'vscode';

import { TextSelection } from './_domain/text-selection';
import { generateSnakeCase } from './generate-snake-case';
import { iterateSelections } from './iterate-selections';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('upper-snake-case.change-to-upper-snake-case', () => {

        iterateSelections((editBuilder: vscode.TextEditorEdit, textSelection: TextSelection) => {

            editBuilder.replace(textSelection.selection, generateSnakeCase(textSelection.text));
        });
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
}