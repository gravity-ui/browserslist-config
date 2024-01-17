/* eslint-disable no-console */
import {readFile, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';

import config from './index';

async function main() {
    const readmeFilePath = resolve(__dirname, 'README.md');

    const content = await readFile(readmeFilePath, 'utf8');
    const updatedContent = content.replace(
        /(\(https:\/\/browsersl\.ist\/#q=)[^)]+/,
        `$1${encodeURIComponent(config.join('\n'))}`,
    );

    await writeFile(readmeFilePath, updatedContent, 'utf8');
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
