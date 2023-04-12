// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "playground" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('playground.play', () => {
		// The code you place here will be executed every time your command is executed
		//bool to know if the user is on windows or not
		// Display an input box for the extension
		let path = vscode.workspace.getConfiguration('playground').get('path');
		console.log(path);
		vscode.window.showInputBox({ placeHolder: 'File extenson' }).then((ext) => {
			// mkdir /tmp/playground
			vscode.workspace.fs.createDirectory(vscode.Uri.file(`${path}`));
			//create main.ext in /tmp using fs
			vscode.workspace.fs.writeFile(vscode.Uri.file(`${path}/main.${ext}`), new Uint8Array()).then(() => {;
			//open main.ext in vscode
			vscode.window.showTextDocument(vscode.Uri.file(`${path}/main.${ext}`));
			});
		});
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
