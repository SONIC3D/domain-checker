# domain-checker
A node-js implemented simple domain name whois checker and notifier for Mac OS X.

## Changelog
* 2017.Jul.23: Finished general gdi image format writer.

## Introduction
* Check domain name update time to keep track on pending-delete domain.
* This is a private tool and it's provided as is. Don't bother me on any problem or feature request.

## Technical Detail
This tool invoke the shell command `whois example.com | grep \"Updated Date:\"` to get the text content and make additional content comparing works.
