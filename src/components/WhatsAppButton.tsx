import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  // Pre-filled WhatsApp message URL
  const phoneNumber = "919064110604"; // Dynamic prefilled phone number matching contact details
  const message = encodeURIComponent("Hello Maa Interiors, I'm visiting your website and would like to inquire about interior design services!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center bg-[#25D366] text-white hover:bg-[#20ba5a] active:scale-95 transition-all p-3.5 rounded-full shadow-2xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      aria-label="Chat with Maa Interiors on WhatsApp"
    >
      {/* Speech Bubble Prompt */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-semibold pr-0 group-hover:pr-2 block font-sans">
        Chat with us
      </span>
      {/* WhatsApp Custom Svg Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.975 14.069 1.5 12.009 1.5c-5.439 0-9.866 4.372-9.87 9.802 0 1.63.43 3.224 1.24 4.621L2.331 21.9l6.316-1.746zM17.15 14.5c-.283-.141-1.674-.827-1.933-.921-.259-.095-.448-.141-.636.141-.188.283-.73.921-.895 1.11-.165.188-.33.212-.613.071-.283-.141-1.196-.441-2.278-1.41-1.15-.224-1.925-.515-2.15-.656-.226-.141-.242-.217-.1-.351l.4-.4c.141-.141.188-.236.283-.424.095-.188.047-.353-.024-.494-.071-.141-.636-1.532-.871-2.1-.23-.553-.462-.477-.636-.486-.165-.008-.353-.01-.542-.01s-.494.071-.754.353c-.259.283-.99 1.012-.99 2.47 0 1.459 1.061 2.871 1.21 3.07.148.188 2.083 3.181 5.048 4.457.705.304 1.256.486 1.684.621.71.226 1.357.194 1.867.118.57-.085 1.674-.684 1.91-1.346.236-.66.236-1.226.165-1.346-.071-.121-.259-.188-.542-.33z" />
      </svg>
    </a>
  );
}
