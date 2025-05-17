import { v } from '../../index.mjs';
import { json } from '@tanstack/start-client-core';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/react-router';
import 'react/jsx-runtime';
import 'motion/react';
import 'clsx';
import 'tailwind-merge';
import 'react';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const p = v("/api/hello")({ GET: ({ request: r, params: t }) => json({ message: 'Hello "/api/hello"!' }) });

export { p as APIRoute };
//# sourceMappingURL=hello.mjs.map
