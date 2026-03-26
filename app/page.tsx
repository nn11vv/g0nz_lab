"use client";
import { useState, useEffect } from "react";

const WHATSAPP_ES = "https://wa.me/34633723185";
const WHATSAPP_EN = "https://wa.me/34663208814";
const TEL_ES = "tel:+34695266981";
const TEL_EN = "tel:+34663208814";

// NUMERO DE DESTINO DEL FORMULARIO — cambiá este para testear
// Para testing: tu número. Para producción: +34695266981 (Julián)
const FORM_WA_DEST = "34633723185";

const WA_ICON_SM = (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WA_ICON_LG = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Animated service icons
const ServiceIcons = {
  persianas: (
    <div className="w-14 h-14 mb-4 relative overflow-hidden">
      <style>{`
        @keyframes blind-down {
          0%, 100% { clip-path: inset(0 0 70% 0); }
          40%, 60% { clip-path: inset(0 0 0% 0); }
        }
        @keyframes blind-slat { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .blind-wrap { animation: blind-down 3s ease-in-out infinite; }
        .blind-s1 { animation: blind-slat 3s ease-in-out infinite 0s; }
        .blind-s2 { animation: blind-slat 3s ease-in-out infinite 0.15s; }
        .blind-s3 { animation: blind-slat 3s ease-in-out infinite 0.3s; }
        .blind-s4 { animation: blind-slat 3s ease-in-out infinite 0.45s; }
      `}</style>
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="1" y="1" width="54" height="54" rx="6" fill="#1A56C8" fillOpacity="0.2" stroke="#3B9EFF" strokeWidth="1.5"/>
        <rect x="4" y="1" width="4" height="54" rx="2" fill="#3B9EFF" fillOpacity="0.5"/>
        <rect x="48" y="1" width="4" height="54" rx="2" fill="#3B9EFF" fillOpacity="0.5"/>
        <g className="blind-wrap">
          <rect className="blind-s1" x="10" y="8"  width="36" height="8" rx="2" fill="#3B9EFF"/>
          <rect className="blind-s2" x="10" y="19" width="36" height="8" rx="2" fill="#3B9EFF" fillOpacity="0.8"/>
          <rect className="blind-s3" x="10" y="30" width="36" height="8" rx="2" fill="#3B9EFF" fillOpacity="0.55"/>
          <rect className="blind-s4" x="10" y="41" width="36" height="8" rx="2" fill="#3B9EFF" fillOpacity="0.3"/>
        </g>
      </svg>
    </div>
  ),
  mosquiteras: (
    <div className="w-14 h-14 mb-4">
      <style>{`
        @keyframes mesh-pulse { 0%,100%{opacity:0.45} 50%{opacity:0.9} }
        @keyframes bug-fly {
          0%   { transform: translate(36px, 8px) rotate(-10deg); opacity:0; }
          15%  { opacity: 1; }
          45%  { transform: translate(20px, 18px) rotate(8deg); opacity:1; }
          75%  { transform: translate(14px, 22px) rotate(-5deg); opacity:0.6; }
          100% { transform: translate(12px, 24px) rotate(0deg); opacity:0; }
        }
        @keyframes wing-flap { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.4)} }
        .mesh-anim { animation: mesh-pulse 2.2s ease-in-out infinite; }
        .bug-anim  { animation: bug-fly 2.8s ease-in-out infinite; }
        .wing-l    { animation: wing-flap 0.18s linear infinite; transform-origin: right center; }
        .wing-r    { animation: wing-flap 0.18s linear infinite 0.09s; transform-origin: left center; }
      `}</style>
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Marco y malla */}
        <rect x="1" y="1" width="54" height="54" rx="6" fill="#1A56C8" fillOpacity="0.15" stroke="#3B9EFF" strokeWidth="1.5"/>
        <g className="mesh-anim" strokeWidth="0.8" stroke="#3B9EFF">
          <line x1="1" y1="10" x2="55" y2="10"/><line x1="1" y1="19" x2="55" y2="19"/>
          <line x1="1" y1="28" x2="55" y2="28"/><line x1="1" y1="37" x2="55" y2="37"/>
          <line x1="1" y1="46" x2="55" y2="46"/>
          <line x1="10" y1="1" x2="10" y2="55"/><line x1="19" y1="1" x2="19" y2="55"/>
          <line x1="28" y1="1" x2="28" y2="55"/><line x1="37" y1="1" x2="37" y2="55"/>
          <line x1="46" y1="1" x2="46" y2="55"/>
        </g>
        <rect x="1" y="1" width="54" height="54" rx="6" fill="none" stroke="#3B9EFF" strokeWidth="1.5"/>
        {/* Mosquito volando hacia la malla */}
        <g className="bug-anim">
          {/* Cuerpo */}
          <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#94A3B8"/>
          {/* Cabeza */}
          <circle cx="4.5" cy="0" r="1.8" fill="#94A3B8"/>
          {/* Antenas */}
          <line x1="4.5" y1="-1.8" x2="7" y2="-4" stroke="#94A3B8" strokeWidth="0.8" strokeLinecap="round"/>
          <line x1="5"   y1="-1.5" x2="8" y2="-3" stroke="#94A3B8" strokeWidth="0.8" strokeLinecap="round"/>
          {/* Ojos */}
          <circle cx="5.2" cy="-0.5" r="0.6" fill="#1E293B"/>
          {/* Alas */}
          <ellipse className="wing-l" cx="-1" cy="-1" rx="4" ry="2" fill="#CBD5E1" fillOpacity="0.7"/>
          <ellipse className="wing-r" cx="1"  cy="-1" rx="4" ry="2" fill="#CBD5E1" fillOpacity="0.7"/>
          {/* Patas */}
          <line x1="-2" y1="1.5" x2="-4" y2="4" stroke="#94A3B8" strokeWidth="0.7" strokeLinecap="round"/>
          <line x1="0"  y1="2"   x2="-1" y2="4.5" stroke="#94A3B8" strokeWidth="0.7" strokeLinecap="round"/>
          <line x1="2"  y1="1.5" x2="3"  y2="4" stroke="#94A3B8" strokeWidth="0.7" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  ),
  ac: (
    <div className="w-14 h-14 mb-4">
      <style>{`
        @keyframes air-flow {
          0% { transform: translateX(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(18px); opacity: 0; }
        }
        @keyframes snowflake-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .flow1 { animation: air-flow 1.8s ease-in-out infinite 0s; }
        .flow2 { animation: air-flow 1.8s ease-in-out infinite 0.4s; }
        .flow3 { animation: air-flow 1.8s ease-in-out infinite 0.8s; }
        .snow-spin { animation: snowflake-spin 6s linear infinite; transform-origin: 28px 38px; }
      `}</style>
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="8" width="48" height="22" rx="6" fill="#1A56C8" fillOpacity="0.3" stroke="#3B9EFF" strokeWidth="1.5"/>
        <rect x="10" y="14" width="8" height="4" rx="2" fill="#3B9EFF" fillOpacity="0.5"/>
        <rect x="21" y="14" width="8" height="4" rx="2" fill="#3B9EFF" fillOpacity="0.5"/>
        <rect x="32" y="14" width="8" height="4" rx="2" fill="#3B9EFF" fillOpacity="0.5"/>
        <rect x="8" y="22" width="40" height="3" rx="1.5" fill="#3B9EFF" fillOpacity="0.3"/>
        <g className="flow1"><path d="M10 36 Q16 33 10 30" stroke="#60C5FF" strokeWidth="1.5" fill="none" strokeLinecap="round"/></g>
        <g className="flow2"><path d="M20 36 Q26 33 20 30" stroke="#60C5FF" strokeWidth="1.5" fill="none" strokeLinecap="round"/></g>
        <g className="flow3"><path d="M30 36 Q36 33 30 30" stroke="#60C5FF" strokeWidth="1.5" fill="none" strokeLinecap="round"/></g>
        <g className="snow-spin">
          <line x1="28" y1="33" x2="28" y2="43" stroke="#3B9EFF" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="23" y1="35.5" x2="33" y2="40.5" stroke="#3B9EFF" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="23" y1="40.5" x2="33" y2="35.5" stroke="#3B9EFF" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="28" cy="38" r="2" fill="#3B9EFF"/>
        </g>
      </svg>
    </div>
  ),
  electricidad: (
    <div className="w-14 h-14 mb-4">
      <style>{`
        @keyframes zap-flash {
          0%,100%{opacity:1;filter:drop-shadow(0 0 0px #FFD700)}
          50%{opacity:0.7;filter:drop-shadow(0 0 6px #FFD700)}
        }
        @keyframes spark1 { 0%,100%{opacity:0;transform:translate(0,0)} 50%{opacity:1;transform:translate(5px,-5px)} }
        @keyframes spark2 { 0%,100%{opacity:0;transform:translate(0,0)} 50%{opacity:1;transform:translate(-4px,-6px)} }
        @keyframes spark3 { 0%,100%{opacity:0;transform:translate(0,0)} 50%{opacity:1;transform:translate(6px,-3px)} }
        .zap-bolt { animation: zap-flash 1.4s ease-in-out infinite; }
        .spark1 { animation: spark1 1.4s ease-in-out infinite 0.1s; }
        .spark2 { animation: spark2 1.4s ease-in-out infinite 0.2s; }
        .spark3 { animation: spark3 1.4s ease-in-out infinite 0s; }
      `}</style>
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="1" y="1" width="54" height="54" rx="6" fill="#92400E" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1.5"/>
        <g className="zap-bolt">
          <path d="M32 6L18 30h12L22 50l18-28H28L32 6z" fill="#F59E0B"/>
        </g>
        <circle className="spark1" cx="38" cy="14" r="2" fill="#FCD34D"/>
        <circle className="spark2" cx="36" cy="10" r="1.5" fill="#FCD34D"/>
        <circle className="spark3" cx="41" cy="18" r="1.5" fill="#FCD34D"/>
      </svg>
    </div>
  ),
};

// Logo SVG Bayres Servicios
const BayresLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const scales: Record<string, number> = { sm: 0.75, md: 1, lg: 1.35 };
  const s = scales[size];
  const w = Math.round(148 * s);
  const h = Math.round(40 * s);
  return (
    <svg width={w} height={h} viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="32" height="40" rx="4" fill="#1A56C8"/>
      <rect x="4.5" y="5"  width="23" height="5" rx="1.5" fill="white"/>
      <rect x="4.5" y="13" width="23" height="5" rx="1.5" fill="white" fillOpacity="0.75"/>
      <rect x="4.5" y="21" width="23" height="5" rx="1.5" fill="white" fillOpacity="0.45"/>
      <rect x="4.5" y="29" width="23" height="5" rx="1.5" fill="white" fillOpacity="0.2"/>
      <rect x="0"   y="0"  width="4"  height="40" rx="2" fill="white" fillOpacity="0.35"/>
      <rect x="28"  y="0"  width="4"  height="40" rx="2" fill="white" fillOpacity="0.35"/>
      <rect x="40" y="6" width="1.5" height="28" fill="white" fillOpacity="0.15"/>
      <text x="48" y="27" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="22" fill="white" letterSpacing="-0.5">BAYRES</text>
      <text x="49" y="37" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="8" fill="white" fillOpacity="0.55" letterSpacing="3">SERVICIOS</text>
    </svg>
  );
};

// Horarios 09:00 – 18:00 cada 30 min
const TIME_SLOTS = Array.from({ length: 19 }, (_, i) => {
  const total = 9 * 60 + i * 30;
  const h = Math.floor(total / 60).toString().padStart(2, "0");
  const m = (total % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
});

type Lang = "es" | "en";

const TEXT: Record<Lang, {
  badge: string; h1: string; h1accent: string; sub: string;
  waBtn: string; citaBtn: string; pills: string[];
  formTitle: string; formSub: string;
  fName: string; fPhone: string; fService: string; fTime: string; fDesc: string; fDescPh: string; fSubmit: string;
  svcLabel: string; svcTitle: string;
  whyLabel: string; whyTitle: string;
  revLabel: string; revTitle: string;
  zoneLabel: string; zoneExtra: string;
  ctaLabel: string; ctaTitle: string;
  waESLabel: string; waENLabel: string; callES: string; callEN: string;
  statLabels: string[]; statsDesc: string; statsTitle: string;
  footer: string;
  okTitle: string; okSub: string; okBtn: string;
  soon: string;
  navServices: string; navReviews: string; navContact: string;
}> = {
  es: {
    badge: "177 reseñas · 5 estrellas",
    h1: "Nos llamas hoy,", h1accent: "te visitamos hoy.",
    sub: "Persianas, mosquiteras y servicios para el hogar en Alicante. Empresa familiar de 3 generaciones. Rápidos, puntuales y sin sorpresas en el precio.",
    waBtn: "WhatsApp ahora", citaBtn: "Pedir cita online",
    pills: ["⚡ Respuesta el mismo día", "✓ Presupuesto gratis", "🇬🇧 English spoken", "📍 Alicante y Costa Blanca"],
    formTitle: "Pedir cita rápida", formSub: "Te confirmamos por WhatsApp en minutos.",
    fName: "Nombre", fPhone: "Teléfono", fService: "Servicio", fTime: "Hora preferida",
    fDesc: "Descripción (opcional)", fDescPh: "Cuéntanos brevemente el problema...", fSubmit: "Solicitar cita →",
    svcLabel: "Lo que hacemos", svcTitle: "Servicios",
    whyLabel: "Por qué elegirnos", whyTitle: "Lo que dicen 177 clientes",
    revLabel: "Reseñas reales", revTitle: "177 opiniones · 5 ⭐",
    zoneLabel: "Zona de servicio:", zoneExtra: "+ toda la provincia bajo consulta",
    ctaLabel: "Contacto directo", ctaTitle: "Hablemos ahora",
    waESLabel: "WhatsApp en español", waENLabel: "English WhatsApp line",
    callES: "Llamar ahora", callEN: "Call now (English)",
    statLabels: ["reseñas", "años", "generaciones"],
    statsTitle: "Respuesta en el día",
    statsDesc: "El 53% de nuestros clientes reciben atención el mismo día que llaman. Presupuesto gratuito incluido.",
    footer: "Mutxamel, Alicante · Empresa familiar de 3 generaciones",
    okTitle: "¡Solicitud recibida!", okSub: "Te confirmamos la cita por WhatsApp en los próximos minutos.", okBtn: "También podés escribirnos",
    soon: "Próximo",
    navServices: "Servicios", navReviews: "Reseñas", navContact: "Contacto",
  },
  en: {
    badge: "177 reviews · 5 stars",
    h1: "You call today,", h1accent: "we visit today.",
    sub: "Blinds, fly screens and home services across Alicante. A family business with 3 generations of expertise. Fast, punctual and no hidden costs.",
    waBtn: "WhatsApp us now", citaBtn: "Book online",
    pills: ["⚡ Same-day visits", "✓ Free quote", "🇬🇧 Fully English-speaking", "📍 Alicante & Costa Blanca"],
    formTitle: "Book a visit", formSub: "We confirm via WhatsApp within minutes.",
    fName: "Name", fPhone: "Phone", fService: "Service", fTime: "Preferred time",
    fDesc: "Description (optional)", fDescPh: "Briefly describe the issue...", fSubmit: "Request visit →",
    svcLabel: "What we do", svcTitle: "Services",
    whyLabel: "Why choose us", whyTitle: "What 177 customers say",
    revLabel: "Real reviews", revTitle: "177 reviews · 5 ⭐",
    zoneLabel: "Service area:", zoneExtra: "+ wider province on request",
    ctaLabel: "Direct contact", ctaTitle: "Let's talk now",
    waESLabel: "WhatsApp en español", waENLabel: "English WhatsApp line",
    callES: "Llamar ahora", callEN: "Call now (English)",
    statLabels: ["reviews", "years exp.", "generations"],
    statsTitle: "Same-day response",
    statsDesc: "53% of our customers receive a same-day visit. Free quote always included.",
    footer: "Mutxamel, Alicante · Family business, 3 generations",
    okTitle: "Request received!", okSub: "We will confirm your visit via WhatsApp within minutes.", okBtn: "You can also message us",
    soon: "Coming soon",
    navServices: "Services", navReviews: "Reviews", navContact: "Contact",
  },
};

const SERVICES: Record<Lang, { icon: string; title: string; desc: string; soon: boolean }[]> = {
  es: [
    { icon: "🪟", title: "Persianas", desc: "Reparación, instalación y motorización. PVC y aluminio para el hogar.", soon: false },
    { icon: "🦟", title: "Mosquiteras", desc: "Instalación de mosquiteras plisadas, enrollables y fijas a medida.", soon: false },
    { icon: "❄️", title: "Aire Acondicionado", desc: "Instalación y mantenimiento de splits, sistemas centrales y tubulares.", soon: false },
    { icon: "⚡", title: "Electricidad", desc: "Instalaciones y reparaciones eléctricas domésticas.", soon: false },
  ],
  en: [
    { icon: "🪟", title: "Blinds", desc: "Repair, installation and motorisation. PVC and aluminium for residential homes.", soon: false },
    { icon: "🦟", title: "Fly Screens", desc: "Installation of pleated, roller and fixed fly screens, made to measure.", soon: false },
    { icon: "❄️", title: "Air Conditioning", desc: "Installation and maintenance of split, ducted and cassette systems.", soon: false },
    { icon: "⚡", title: "Electrical", desc: "Domestic electrical installation and repairs.", soon: false },
  ],
};

const WHY: Record<Lang, { icon: string; title: string; desc: string }[]> = {
  es: [
    { icon: "⚡", title: "El mismo día, sin excusas", desc: "Más del 53% de nuestros clientes reciben atención el mismo día que llaman. Si es urgente, lo sabemos." },
    { icon: "👨‍👩‍👦", title: "3 generaciones de oficio", desc: "Julián, Juan y Valentín. El trabajo bien hecho no es un eslogan — es una herencia familiar." },
    { icon: "💰", title: "El precio que ves es el que pagas", desc: "Sin sorpresas. Sin cobros extra por desplazamiento. La visita se descuenta del trabajo final." },
    { icon: "🇬🇧", title: "We speak English", desc: "Nuestro equipo habla inglés perfectamente. Línea directa en inglés: +34 663 208 814." },
    { icon: "🔧", title: "Primero revisamos, luego recomendamos", desc: "No recomendamos cambios innecesarios. Lo arreglamos si se puede arreglar." },
    { icon: "📍", title: "Toda la Costa Blanca", desc: "Alicante, Playa San Juan, El Campello, Mutxamel, Bussot y hasta Benidorm." },
  ],
  en: [
    { icon: "⚡", title: "Same day, no excuses", desc: "Over 53% of our customers receive a visit the same day they call. If it's urgent, we know." },
    { icon: "👨‍👩‍👦", title: "3 generations of craft", desc: "Julián, Juan and Valentín. Doing things right isn't a slogan — it's a family tradition." },
    { icon: "💰", title: "The price you see is the price you pay", desc: "No surprises. No travel surcharges. The visit fee is deducted from the final job cost." },
    { icon: "🇬🇧", title: "We speak English — perfectly", desc: "No need to explain in Spanish. Call or WhatsApp our English line: +34 663 208 814." },
    { icon: "🔧", title: "We check first, then recommend", desc: "We never suggest unnecessary work. We fix it if it can be fixed. Honest always." },
    { icon: "📍", title: "All across the Costa Blanca", desc: "Alicante, Playa San Juan, El Campello, Mutxamel, Bussot and up to Benidorm." },
  ],
};

const SERVICE_OPTIONS: Record<Lang, { value: string; label: string }[]> = {
  es: [
    { value: "persianas", label: "🪟 Persianas" },
    { value: "mosquiteras", label: "🦟 Mosquiteras" },
    { value: "ac", label: "❄️ Aire Acondicionado" },
    { value: "electricidad", label: "⚡ Electricidad" },
    { value: "otro", label: "🔧 Otro" },
  ],
  en: [
    { value: "persianas", label: "🪟 Blinds" },
    { value: "mosquiteras", label: "🦟 Fly Screens" },
    { value: "ac", label: "❄️ Air Conditioning" },
    { value: "electricidad", label: "⚡ Electrical" },
    { value: "otro", label: "🔧 Other" },
  ],
};

const REVIEWS = [
  { name: "James Fletcher", flag: "🇬🇧", stars: 5, text: "Outstanding service! Same day repair and the technician spoke perfect English. Highly recommended!" },
  { name: "Cristina Molina", flag: "🇪🇸", stars: 5, text: "La respuesta fue inmediata. No recomendaron cambios innecesarios. Todo rápido y eficiente. Muy contentos." },
  { name: "Lammert", flag: "🇳🇱", stars: 5, text: "Gistermiddag gebeld, vanmorgen opgelost. Perfect Engels gesproken. SUPER!" },
  { name: "Pili Piazuelo", flag: "🇪🇸", stars: 5, text: "Empresa familiar de 3 generaciones. Da gusto el trabajo bien hecho. Muchas Gracias Julián & Juan." },
  { name: "Scott Moritz", flag: "🇺🇸", stars: 5, text: "Great family business! Everything explained in detail in English. They exceeded my expectations." },
  { name: "Fernanda San Juan", flag: "🇪🇸", stars: 5, text: "Me han arreglado tres persianas y me han cobrado 130€. No se puede pedir más. Ya tengo persianeros." },
];

const ZONES = ["Alicante", "Playa San Juan", "San Juan Pueblo", "Mutxamel", "El Campello", "Bussot", "Benidorm"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [activeReview, setActiveReview] = useState(0);
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "persianas", hora: "09:00", descripcion: "" });
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [visible, setVisible] = useState(false);

  const t = TEXT[lang];
  const WA = lang === "es" ? WHATSAPP_ES : WHATSAPP_EN;

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const iv = setInterval(() => setActiveReview((p) => (p + 1) % REVIEWS.length), 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <BayresLogo size="md" />
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#servicios" className="hover:text-white transition-colors">{t.navServices}</a>
            <a href="#resenas" className="hover:text-white transition-colors">{t.navReviews}</a>
            <a href="#contacto" className="hover:text-white transition-colors">{t.navContact}</a>
          </div>
          <div className="flex items-center gap-2">
            {/* Lang toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5">
              <button onClick={() => setLang("es")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === "es" ? "bg-white text-black" : "text-white/50 hover:text-white"}`}>
                🇪🇸 ES
              </button>
              <button onClick={() => setLang("en")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === "en" ? "bg-white text-black" : "text-white/50 hover:text-white"}`}>
                🇬🇧 EN
              </button>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold bg-[#25D366] text-black px-4 py-1.5 rounded-full hover:bg-[#20bf5a] transition-all">
              {WA_ICON_SM} WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B9EFF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3B9EFF]/5 rounded-full blur-3xl" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px,rgba(255,255,255,0.03) 1px,transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Logo hero — versión grande sobre fondo oscuro */}
            <div className="mb-8">
              <BayresLogo size="lg" />
            </div>
            <div className="inline-flex items-center gap-2 bg-[#3B9EFF]/10 border border-[#3B9EFF]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-[#3B9EFF] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#3B9EFF] tracking-widest uppercase">{t.badge}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              {t.h1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B9EFF] to-[#60C5FF]">{t.h1accent}</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">{t.sub}</p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-black font-bold px-6 py-3.5 rounded-xl hover:bg-[#20bf5a] transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20">
                {WA_ICON_LG} {t.waBtn}
              </a>
              <a href="#cita" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                {t.citaBtn}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.pills.map((p) => <span key={p} className="text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{p}</span>)}
            </div>
          </div>

          {/* Form */}
          <div id="cita" className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {!submitted ? (
                <>
                  <h2 className="text-xl font-bold mb-1">{t.formTitle}</h2>
                  <p className="text-sm text-white/40 mb-6">{t.formSub}</p>
                  <form onSubmit={(e) => {
                      e.preventDefault();
                      const serviceLabels: Record<string, string> = {
                        persianas: "🪟 Persianas",
                        mosquiteras: "🦟 Mosquiteras",
                        ac: "❄️ Aire Acondicionado",
                        electricidad: "⚡ Electricidad",
                        otro: "🔧 Otro",
                      };
                      const msg = [
                        "Nueva solicitud de cita 🗓️",
                        "",
                        `👤 Nombre: ${form.nombre}`,
                        `📞 Teléfono: ${form.telefono}`,
                        `🔧 Servicio: ${serviceLabels[form.servicio] || form.servicio}`,
                        `🕐 Hora preferida: ${form.hora}`,
                        form.descripcion ? `📝 Descripción: ${form.descripcion}` : null,
                        "",
                        "Enviado desde bayresservicios.com",
                      ].filter(Boolean).join("\n");
                      const waUrl = `https://wa.me/${FORM_WA_DEST}?text=${encodeURIComponent(msg)}`;
                      setWaUrl(waUrl);
                      setSubmitted(true);
                    }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">{t.fName}</label>
                      <input required type="text" placeholder={lang === "es" ? "Tu nombre" : "Your name"}
                        value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#3B9EFF]/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">{t.fPhone}</label>
                      <input required type="tel" placeholder="+34 600 000 000"
                        value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#3B9EFF]/50 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">{t.fService}</label>
                      <select value={form.servicio} onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                        className="w-full bg-[#0B0F1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B9EFF]/50 transition-all">
                        {SERVICE_OPTIONS[lang].map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">{t.fTime}</label>
                      <select value={form.hora} onChange={(e) => setForm({ ...form, hora: e.target.value })}
                        className="w-full bg-[#0B0F1A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B9EFF]/50 transition-all">
                        {TIME_SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">{t.fDesc}</label>
                      <textarea placeholder={t.fDescPh} rows={2}
                        value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#3B9EFF]/50 transition-all resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full bg-[#3B9EFF] text-black font-bold py-3.5 rounded-xl hover:bg-[#60C5FF] transition-all hover:scale-[1.02] shadow-lg shadow-[#3B9EFF]/20">
                      {t.fSubmit}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">{t.okTitle}</h3>
                  <p className="text-white/50 text-sm mb-4">{t.okSub}</p>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-black font-bold px-5 py-3.5 rounded-xl text-sm hover:bg-[#20bf5a] transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/20 mb-3">
                    {WA_ICON_SM}
                    {lang === "es" ? "Enviar por WhatsApp →" : "Send via WhatsApp →"}
                  </a>
                  <p className="text-xs text-white/30">
                    {lang === "es" ? "Se abrirá WhatsApp con tu solicitud lista para enviar" : "WhatsApp will open with your request ready to send"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#3B9EFF] tracking-widest uppercase">{t.svcLabel}</span>
            <h2 className="text-4xl font-black mt-2">{t.svcTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES[lang].map((s, i) => (
              <div key={i} className={`relative border rounded-2xl p-6 transition-all hover:-translate-y-1 ${s.soon ? "bg-white/[0.03] border-white/5 opacity-60" : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-[#3B9EFF]/30"}`}>
                {s.soon && <span className="absolute top-4 right-4 text-[10px] font-bold text-[#3B9EFF] bg-[#3B9EFF]/10 border border-[#3B9EFF]/20 px-2 py-0.5 rounded-full">{t.soon}</span>}
                {i === 0 && ServiceIcons.persianas}
                {i === 1 && ServiceIcons.mosquiteras}
                {i === 2 && ServiceIcons.ac}
                {i === 3 && ServiceIcons.electricidad}
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#3B9EFF] tracking-widest uppercase">{t.whyLabel}</span>
            <h2 className="text-4xl font-black mt-2">{t.whyTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY[lang].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-[#3B9EFF] tracking-widest uppercase">{t.revLabel}</span>
              <h2 className="text-4xl font-black mt-2">{t.revTitle}</h2>
            </div>
            <div className="hidden md:flex gap-2">
              {REVIEWS.map((_, i) => (
                <button key={i} onClick={() => setActiveReview(i)}
                  className={`h-2 rounded-full transition-all ${i === activeReview ? "bg-[#3B9EFF] w-6" : "bg-white/20 w-2"}`} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r, i) => (
              <div key={i} onClick={() => setActiveReview(i)}
                className={`border rounded-2xl p-6 cursor-pointer transition-all ${i === activeReview ? "border-[#3B9EFF]/40 bg-[#3B9EFF]/5 scale-[1.02]" : "bg-white/5 border-white/10 hover:border-white/20"}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{r.flag}</span>
                    <span className="font-semibold text-sm">{r.name}</span>
                  </div>
                  <div className="flex">{[...Array(r.stars)].map((_, s) => <span key={s} className="text-yellow-400 text-xs">★</span>)}</div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed italic">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONA */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-bold text-white/40 uppercase tracking-widest">{t.zoneLabel}</span>
            {ZONES.map((z) => <span key={z} className="text-sm font-medium text-white/70 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">📍 {z}</span>)}
            <span className="text-sm text-white/30">{t.zoneExtra}</span>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-[#3B9EFF] tracking-widest uppercase">{t.ctaLabel}</span>
            <h2 className="text-4xl font-black mt-2 mb-6">{t.ctaTitle}</h2>
            <div className="space-y-4">
              {/* WA ES */}
              <a href={WHATSAPP_ES} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-4 hover:bg-[#25D366]/20 transition-all">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div><p className="font-bold">{t.waESLabel}</p><p className="text-sm text-white/50">+34 695 266 981</p></div>
              </a>
              {/* WA EN */}
              <a href={WHATSAPP_EN} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-4 hover:bg-[#25D366]/20 transition-all">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 relative">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span className="absolute -bottom-1.5 -right-1.5 bg-[#012169] text-white text-[8px] font-black px-1 py-0.5 rounded leading-none border border-white/20">EN</span>
                </div>
                <div><p className="font-bold">{t.waENLabel}</p><p className="text-sm text-white/50">+34 663 208 814</p></div>
              </a>
              {/* Call ES */}
              <a href={TEL_ES}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">📞</div>
                <div><p className="font-bold">{t.callES}</p><p className="text-sm text-white/50">+34 695 266 981</p></div>
              </a>
              {/* Call EN */}
              <a href={TEL_EN}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 relative text-xl">
                  📞
                  <span className="absolute -bottom-1.5 -right-1.5 bg-[#012169] text-white text-[8px] font-black px-1 py-0.5 rounded leading-none border border-white/20">EN</span>
                </div>
                <div><p className="font-bold">{t.callEN}</p><p className="text-sm text-white/50">+34 663 208 814</p></div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3B9EFF]/10 to-transparent border border-[#3B9EFF]/20 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-black mb-3">{t.statsTitle}</h3>
            <p className="text-white/50 mb-6 leading-relaxed">{t.statsDesc}</p>
            <div className="grid grid-cols-3 gap-4">
              {[["177", t.statLabels[0]], ["20+", t.statLabels[1]], ["3", t.statLabels[2]]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-black text-[#3B9EFF]">{n}</div>
                  <div className="text-xs text-white/40 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <BayresLogo size="sm" />
          <p className="text-xs text-white/30">{t.footer}</p>
          <p className="text-xs text-white/20">© 2026 Bayres Servicios S.L.</p>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a href={WA} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all z-50">
        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}
