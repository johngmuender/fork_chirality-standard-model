import { copyFileSync } from 'node:fs';
import { basePath } from '../site-address.mjs';

// vinext writes the not-found page at the root of dist/client even when the
// rest of the export sits under the base path. A project page publishes only
// that subdirectory, so the page has to travel with it.
if (basePath)
  copyFileSync('dist/client/404.html', 'dist/client' + basePath + '/404.html');
