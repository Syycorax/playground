# playground README

Playground provide a quick way to get a temporary file to test your code without having to create a new file manually.

## Platform Support

Since 0.0.2, Playground supports Windows, Linux and Mac (Mac is not tested yet). If you find any issue, please report it.

### Note for Linux/Mac users:

The default setting is set to "%TEMP%" for Windows however, the extension checks at runtime if the OS is Windows or not. If it is not Windows, it will use the default path for Linux/Mac which is "/tmp/playground". If you want to change the path, you can do so by changing the setting "playground.path". If the path is changed, it will not be overwritten by the extension.

## Extension Settings

This extension contributes the following settings:

- `playground.path`: Path for the playground files to be created in.

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.2

Added support for Windows.

### 0.0.1

Initial release of Playground.
