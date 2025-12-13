export const WHATSAPP_NUMBER = "+601124054294";
export const WHATSAPP_MESSAGE =
  "Hello Study Connect Malaysia team! I need help with studying in Malaysia. Can you please guide me?";

const removeSpaces = (value: string) => value.replace(/\s/g, "");

export const isMobileUserAgent = (userAgent = "") =>
  /Android|iPhone|iPad|iPod/i.test(userAgent);

export const getWhatsAppUrl = (
  isMobile: boolean,
  message = WHATSAPP_MESSAGE
) => {
  const phone = removeSpaces(WHATSAPP_NUMBER);
  const encodedMessage = encodeURIComponent(message);

  if (isMobile) {
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }

  return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
};

type WhatsAppMessageField = {
  label: string;
  value?: string;
};

export const buildWhatsAppMessage = (
  intro?: string,
  fields: WhatsAppMessageField[] = []
) => {
  const sanitizedIntro =
    intro && intro.trim().length > 0 ? intro.trim() : WHATSAPP_MESSAGE;

  const lines = [sanitizedIntro];

  for (const field of fields) {
    const trimmedValue = field.value?.trim();
    if (trimmedValue) {
      lines.push(`${field.label}: ${trimmedValue}`);
    }
  }

  return lines.join("\n");
};

export const openWhatsAppChat = (message?: string) => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return;
  }

  const url = getWhatsAppUrl(isMobileUserAgent(navigator.userAgent), message);
  window.open(url, "_blank");
};
