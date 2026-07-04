import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, Send, CheckCircle2, Calendar, AlertCircle } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<"pending" | "sent" | "failed" | "unconfigured" | null>(null);

  // Helper to send email notification using EmailJS
  const sendEmailNotification = async (params: {
    type: string;
    name: string;
    email: string;
    phone: string;
    details?: string;
    projectType?: string;
    budgetRange?: string;
    preferredDate?: string;
    preferredTime?: string;
  }) => {
    const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
    const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS is not configured yet in .env file or Secrets.");
      setEmailStatus("unconfigured");
      return;
    }

    try {
      setEmailStatus("pending");
      
      const templateParams = {
        to_email: "maapvtofficial@gmail.com",
        request_type: params.type,
        from_name: params.name,
        from_email: params.email,
        from_phone: params.phone,
        project_type: params.projectType || "N/A",
        budget_range: params.budgetRange || "N/A",
        preferred_date: params.preferredDate || "N/A",
        preferred_time: params.preferredTime || "N/A",
        message_content: params.details || "No details provided."
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setEmailStatus("sent");
    } catch (err) {
      console.error("EmailJS dispatch failed:", err);
      setEmailStatus("failed");
    }
  };

  // Form states - Consultation
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Living Room",
    budgetRange: "₹2–5 Lakh",
    preferredDate: "",
    preferredTime: "Morning",
    details: "",
  });

  // Handle consultation input changes
  const handleConsultationChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Consultation submit
  const handleConsultationSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // Validate
    if (!consultationForm.name || !consultationForm.email || !consultationForm.phone || !consultationForm.preferredDate) {
      setError("Please fill out all required fields: Name, Email, Phone, and Preferred Date.");
      setSubmitting(false);
      return;
    }

    try {
      // Write to Firestore - appointments collection
      await addDoc(collection(db, "appointments"), {
        name: consultationForm.name,
        email: consultationForm.email,
        phone: consultationForm.phone,
        projectType: consultationForm.projectType,
        budgetRange: consultationForm.budgetRange,
        preferredDate: consultationForm.preferredDate,
        preferredTime: consultationForm.preferredTime,
        details: consultationForm.details,
        createdAt: new Date().toISOString(),
        status: "pending",
      });

      // Send email notification via EmailJS
      await sendEmailNotification({
        type: "Consultation Booking",
        name: consultationForm.name,
        email: consultationForm.email,
        phone: consultationForm.phone,
        projectType: consultationForm.projectType,
        budgetRange: consultationForm.budgetRange,
        preferredDate: consultationForm.preferredDate,
        preferredTime: consultationForm.preferredTime,
        details: consultationForm.details,
      });

      // Clear form
      setSuccess(`Thanks, ${consultationForm.name} — we've received your request and will call within one business day to confirm your consultation.`);
      setConsultationForm({
        name: "",
        email: "",
        phone: "",
        projectType: "Living Room",
        budgetRange: "₹2–5 Lakh",
        preferredDate: "",
        preferredTime: "Morning",
        details: "",
      });
    } catch (err: any) {
      console.error("Firestore writing error: ", err);
      setError("Failed to schedule your appointment. Please check your internet connection or contact us directly via phone or WhatsApp.");
      handleFirestoreError(err, OperationType.WRITE, "appointments");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 font-sans min-h-screen bg-linen" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page title header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold tracking-widest text-stone uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-stone text-base sm:text-lg leading-relaxed">
            Whether you want to remodel your entire home, design a single room, or query about a commercial space, we're here to translate your goals into a warm, liveable reality.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Studio Contacts Info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-espresso mb-6">
                Our Studio Details
              </h2>
              <p className="text-stone text-base leading-relaxed mb-8">
                Give us a call, send an email, or reach out on WhatsApp. We love discussing layout ideas, color palettes, and material boards with you directly.
              </p>
            </div>

            {/* Direct communication nodes */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-mist rounded-xl flex items-center justify-center text-espresso flex-shrink-0">
                  <Calendar size={22} />
                </div>
                <div className="ml-5">
                  <span className="block font-serif text-lg font-semibold text-espresso">Flexible Consultations</span>
                  <span className="block font-sans text-stone text-sm mt-1 leading-relaxed">
                    We offer highly flexible virtual consultations and coordinate on-site site visits to suit your timeline and needs perfectly.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-mist rounded-xl flex items-center justify-center text-espresso flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div className="ml-5">
                  <span className="block font-serif text-lg font-semibold text-espresso">Phone & WhatsApp</span>
                  <a href="tel:+919064110604" className="block font-sans text-stone text-sm mt-1 hover:underline">
                    +91 90641 10604
                  </a>
                  <span className="text-xs text-stone/70 mt-1 block">Manual consultation booking & general chats</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-mist rounded-xl flex items-center justify-center text-espresso flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div className="ml-5">
                  <span className="block font-serif text-lg font-semibold text-espresso">Email Address</span>
                  <a href="mailto:maapvtofficial@gmail.com" className="block font-sans text-stone text-sm mt-1 hover:underline">
                    maapvtofficial@gmail.com
                  </a>
                  <span className="text-xs text-stone/70 mt-1 block">Inquire for collaborations and business proposals</span>
                </div>
              </div>
            </div>

            {/* Design Mood Panel */}
            <div className="rounded-xl overflow-hidden border border-stone/15 p-8 shadow-md bg-espresso relative flex flex-col justify-center min-h-[220px]">
              <div className="relative z-10 text-linen text-center">
                <span className="font-serif font-bold text-xl block mb-2">Bespoke Material Finishes</span>
                <p className="text-linen/85 text-sm leading-relaxed max-w-xs mx-auto mb-4">
                  We source high-quality premium laminates, natural timber, custom metal trims, and textured wall coverings to suit your design taste perfectly.
                </p>
                <span className="font-sans text-xs tracking-wider text-mist font-semibold uppercase">CURATED FOR EXCELLENCE</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mist/5 rounded-full pointer-events-none blur-xl" />
            </div>
          </div>

          {/* Right Column: Interaction form panel */}
          <div className="lg:col-span-7 bg-linen p-6 sm:p-8 rounded-2xl border border-stone/15 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-espresso mb-8 flex items-center gap-2 border-b border-stone/10 pb-4">
              <Calendar size={22} className="text-espresso" />
              Book a Consultation
            </h2>

            {/* Error banner */}
            {error && (
              <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-start gap-3 mb-6 border border-red-150 font-sans text-sm">
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Success screen card */}
            {success ? (
              <div className="text-center py-12 px-6 bg-mist/20 rounded-xl border border-stone/10 font-sans">
                <CheckCircle2 size={56} className="text-espresso mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-bold text-espresso mb-4">Request Logged</h3>
                <p className="text-stone text-base leading-relaxed mb-6 max-w-md mx-auto">
                  {success}
                </p>
                
                <div className="w-full max-w-md mx-auto mb-6">
                  {emailStatus === "sent" && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 text-xs font-sans text-left">
                      <p className="font-semibold mb-1">✅ Notification Dispatched Successfully</p>
                      <p className="text-emerald-700/90 leading-relaxed">
                        The form data was successfully emailed to <strong>maapvtofficial@gmail.com</strong> using EmailJS.
                      </p>
                    </div>
                  )}

                  {emailStatus === "pending" && (
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 text-xs font-sans text-left animate-pulse">
                      <p className="font-semibold mb-1">⏳ Sending Notification...</p>
                      <p className="text-amber-700/90 leading-relaxed">
                        Dispatching email alert to <strong>maapvtofficial@gmail.com</strong> via EmailJS...
                      </p>
                    </div>
                  )}

                  {emailStatus === "failed" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-xs font-sans text-left">
                      <p className="font-semibold mb-1">❌ Email dispatch failed</p>
                      <p className="text-red-700/90 leading-relaxed">
                        The submission was saved to Firestore, but EmailJS failed to send the email alert. Check your browser console logs, or double-check that your Service ID, Template ID, and Public Key are entered correctly in the app's Secrets menu.
                      </p>
                    </div>
                  )}

                  {emailStatus === "unconfigured" && (
                    <div className="bg-stone-50 border border-stone-200 text-stone-800 rounded-lg p-4 text-xs font-sans text-left">
                      <p className="font-bold text-stone-950 mb-1">⚙️ EmailJS Credentials Needed</p>
                      <p className="text-stone-700 leading-relaxed mb-2">
                        Your request was successfully saved in the database! However, to receive instant email notifications to <strong>maapvtofficial@gmail.com</strong>, please set up your free EmailJS account and add these environment variables to the <strong>Settings &gt; Secrets</strong> menu:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 font-mono text-[11px] text-stone-800">
                        <li>VITE_EMAILJS_SERVICE_ID</li>
                        <li>VITE_EMAILJS_TEMPLATE_ID</li>
                        <li>VITE_EMAILJS_PUBLIC_KEY</li>
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setSuccess(null);
                    setEmailStatus(null);
                  }}
                  className="block mx-auto text-sm font-bold text-espresso hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div>
                {/* 1. Book a Consultation Form */}
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cons-name" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cons-name"
                          name="name"
                          value={consultationForm.name}
                          onChange={handleConsultationChange}
                          placeholder="Priya Sen"
                          className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cons-phone" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="cons-phone"
                          name="phone"
                          value={consultationForm.phone}
                          onChange={handleConsultationChange}
                          placeholder="+91 98300 12345"
                          className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cons-email" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="cons-email"
                        name="email"
                        value={consultationForm.email}
                        onChange={handleConsultationChange}
                        placeholder="priya.sen@gmail.com"
                        className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cons-project" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                          Project Type
                        </label>
                        <select
                          id="cons-project"
                          name="projectType"
                          value={consultationForm.projectType}
                          onChange={handleConsultationChange}
                          className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                        >
                          <option value="Living Room">Living Room Remodel</option>
                          <option value="Bedroom">Bedroom styling</option>
                          <option value="Kitchen">Modern Kitchen</option>
                          <option value="Full Home">Full-Home Renovation</option>
                          <option value="Office">Office / Coworking</option>
                          <option value="Commercial">Commercial Cafe/Bistro</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="cons-budget" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                          Approximate Budget
                        </label>
                        <select
                          id="cons-budget"
                          name="budgetRange"
                          value={consultationForm.budgetRange}
                          onChange={handleConsultationChange}
                          className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                        >
                          <option value="Under ₹2 Lakh">Under ₹2 Lakh</option>
                          <option value="₹2–5 Lakh">₹2–5 Lakh</option>
                          <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                          <option value="₹10 Lakh+">₹10 Lakh+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cons-date" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="cons-date"
                          name="preferredDate"
                          value={consultationForm.preferredDate}
                          onChange={handleConsultationChange}
                          className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cons-time" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                          Preferred Time-of-day
                        </label>
                        <select
                          id="cons-time"
                          name="preferredTime"
                          value={consultationForm.preferredTime}
                          onChange={handleConsultationChange}
                          className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors"
                        >
                          <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                          <option value="Evening">Evening (4:00 PM - 7:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cons-details" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                        Project Details (Optional)
                      </label>
                      <textarea
                        id="cons-details"
                        name="details"
                        value={consultationForm.details}
                        onChange={handleConsultationChange}
                        placeholder="Tell us about the space... Is it an old heritage house? A new apartment? What mood do you want to invoke?"
                        rows={4}
                        className="w-full bg-linen/50 border border-stone/20 rounded px-4 py-3 text-sm focus:border-espresso focus:ring-1 focus:ring-espresso transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-espresso hover:bg-espresso/90 text-linen font-medium py-3.5 rounded transition-all flex items-center justify-center gap-2.5 shadow hover:shadow-md disabled:opacity-75 cursor-pointer"
                    >
                      {submitting ? "Booking your spot..." : "Book a Consultation"}
                      <Send size={16} />
                    </button>
                  </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
