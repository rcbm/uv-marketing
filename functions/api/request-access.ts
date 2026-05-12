interface Env {
  WAITLIST: KVNamespace;
}

interface RequestAccessBody {
  email?: string;
  company?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_BODY_SIZE = 2048;
const ALLOWED_ORIGINS = ['https://uv.now', 'https://www.uv.now', 'https://ultraviolet.now'];

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin) || origin.endsWith('.uv-marketing.pages.dev');
}

function corsHeaders(origin: string | null): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': isAllowedOrigin(origin) ? origin! : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });
}

export const onRequestOptions: PagesFunction<Env> = async ({ request }) => {
  return new Response(null, { status: 204, headers: corsHeaders(request.headers.get('Origin')) });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get('Origin');

  if (!env.WAITLIST) {
    return jsonResponse({ error: 'Waitlist storage is not configured' }, 500, origin);
  }

  const contentType = request.headers.get('Content-Type') ?? '';
  if (!contentType.includes('application/json')) {
    return jsonResponse({ error: 'Content-Type must be application/json' }, 400, origin);
  }

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_SIZE) {
    return jsonResponse({ error: 'Request body too large' }, 400, origin);
  }

  let body: RequestAccessBody;
  try {
    body = JSON.parse(rawBody) as RequestAccessBody;
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400, origin);
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const company = (body.company ?? '').trim();

  if (!email || email.length > MAX_FIELD_LENGTH || !EMAIL_REGEX.test(email)) {
    return jsonResponse({ error: 'Please enter a valid email address' }, 400, origin);
  }
  if (!company || company.length > MAX_FIELD_LENGTH) {
    return jsonResponse({ error: 'Please enter a company name' }, 400, origin);
  }

  const existing = await env.WAITLIST.get(`email::${email}`);
  if (existing) {
    return jsonResponse({ ok: true }, 200, origin);
  }

  const submittedAt = new Date().toISOString();
  const key = `${submittedAt}-${crypto.randomUUID()}`;
  const value = JSON.stringify({ email, company, submittedAt });

  try {
    await env.WAITLIST.put(key, value);
    await env.WAITLIST.put(`email::${email}`, key);
  } catch {
    return jsonResponse({ error: 'Failed to record submission' }, 500, origin);
  }

  return jsonResponse({ ok: true }, 200, origin);
};
