export const BRAND_NAME = "Frostify Service Center";
export const PHONE = "+919833200228";
export const PHONE_DISPLAY = "98332 00228";
export const WHATSAPP_NUMBER = "919833200228";
export const SITE_URL = "https://frostifyservicecenter.com";

export const BRAND_COLORS = {
  primary: "#ff6a00",
  black: "#000000",
};


export function whatsappUrl(message = "Hi Frostify Service Center, I need appliance repair service in Mumbai.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}


