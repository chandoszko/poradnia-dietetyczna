import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
}

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  _hp: string;
}

const rateLimitStore = new Map<string, number>();

function getClientIP(request: Request): string {
  return request.headers.get("CF-Connecting-IP") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitStore.get(ip);
  if (last && now - last < 5 * 60 * 1000) {
    return true;
  }
  rateLimitStore.set(ip, now);
  return false;
}

function validate(body: ContactBody): string | null {
  if (!body.name || body.name.trim().length < 2) return "Imię jest wymagane (min. 2 znaki)";
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return "Podaj prawidłowy adres email";
  if (!body.subject || body.subject.trim().length < 3) return "Temat jest wymagany (min. 3 znaki)";
  if (!body.message || body.message.trim().length < 10) return "Wiadomość jest wymagana (min. 10 znaków)";
  return null;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  if (context.request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ip = getClientIP(context.request);
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Za dużo żądań. Spróbuj za kilka minut." }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: ContactBody;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Nieprawidłowe dane formularza" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (body._hp) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const validationError = validate(body);
  if (validationError) {
    return new Response(JSON.stringify({ error: validationError }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = context.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Przepraszamy, wystąpił błąd. Spróbuj ponownie później lub zadzwoń." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Poradnia Dietetyczna <onboarding@resend.dev>",
      to: "chandoszko@gmail.com",
      replyTo: body.email,
      subject: `[Formularz] ${body.subject}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Temat:</strong> ${body.subject}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Przepraszamy, wystąpił błąd. Spróbuj ponownie później lub zadzwoń." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
