// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const basicAuth = request.headers.get('authorization');
  const url = request.nextUrl;

  const USERNAME = 'admin';
  const PASSWORD = 'Surajitjana123'; // Change this

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pass] = atob(authValue).split(':');

    if (user === USERNAME && pass === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
    }
