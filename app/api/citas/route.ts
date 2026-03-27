import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  persianas: "Persianas",
  mosquiteras: "Mosquiteras",
  ac: "Aire Acondicionado",
  electricidad: "Electricidad",
  otro: "Otro",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, telefono, servicio, hora_pref, descripcion, idioma } = body;

    // Validacion basica
    if (!nombre || !telefono || !servicio) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const servicioLabel = SERVICE_LABELS[servicio] || servicio;
    const esES = idioma !== "en";

    // Mandar email a Julian
    await resend.emails.send({
      from: "Bayres Servicios <onboarding@resend.dev>",
      to: [process.env.JULIAN_EMAIL || "nvgonz7@gmail.com"],
      subject: `Nueva cita: ${nombre} — ${servicioLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f6fa; padding: 24px; border-radius: 12px;">
          <div style="background: #1A56C8; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Nueva solicitud de cita</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Bayres Servicios · bayresservicios.com</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px; width: 140px;">Nombre</td>
                <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">${nombre}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Telefono</td>
                <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">
                  <a href="tel:${telefono}" style="color: #1A56C8;">${telefono}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Servicio</td>
                <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">${servicioLabel}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Hora preferida</td>
                <td style="padding: 12px 0; font-weight: bold; font-size: 16px;">${hora_pref || "Sin preferencia"}</td>
              </tr>
              ${descripcion ? `
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Descripcion</td>
                <td style="padding: 12px 0; font-size: 15px;">${descripcion}</td>
              </tr>` : ""}
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Idioma</td>
                <td style="padding: 12px 0; font-size: 14px;">${esES ? "Español" : "English"}</td>
              </tr>
            </table>
          </div>
          <div style="margin-top: 20px; display: flex; gap: 12px;">
            <a href="https://wa.me/${telefono.replace(/\D/g, "")}"
              style="display: inline-block; background: #25D366; color: black; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 15px;">
              Responder por WhatsApp
            </a>
          </div>
          <p style="margin-top: 20px; color: #9ca3af; font-size: 12px; text-align: center;">
            Enviado desde bayresservicios.com · ${new Date().toLocaleString("es-ES")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en /api/citas:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}