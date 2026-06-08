import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type ContactType = "" | "church" | "university" | "host" | "general";

export function ContactSection() {
  const [contactType, setContactType] = useState<ContactType>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    location: "",
    preferredDates: "",
    audienceSize: "",
    venueNotes: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactType("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        location: "",
        preferredDates: "",
        audienceSize: "",
        venueNotes: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-charcoal-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: Image + warm welcome */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold tracking-widest uppercase text-copper-600 mb-4">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6 leading-tight">
              Let's grab a (virtual) coffee.
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8 max-w-md">
              Whether you want us at your church, your campus, or just have a question — we'd love to hear from you.
            </p>
            <div className="rounded-3xl overflow-hidden aspect-[5/4] shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519289636-f4ce8e73c484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Two people in welcoming conversation"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-charcoal-500 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              We typically respond within 2 business days.
            </p>
          </div>

          {/* Right: form */}
          <div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-md border border-charcoal-100">
            {/* Contact Type Dropdown */}
            <div className="mb-6">
              <label htmlFor="contact-type-select" className="block mb-2 text-charcoal-900">
                What would you like to discuss?
              </label>
              <select
                id="contact-type-select"
                value={contactType}
                onChange={(e) => setContactType(e.target.value as ContactType)}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                required
              >
                <option value="">Select an option...</option>
                <option value="church">Request a CiP event at my church</option>
                <option value="university">Request a CiP event at my university</option>
                <option value="host">I want to host a CiP networking event</option>
                <option value="general">General enquiry</option>
              </select>
            </div>

            {contactType && (
              <>
                {/* Common Fields */}
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-charcoal-900">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-charcoal-900">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 text-charcoal-900">
                    Phone number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                  />
                </div>

                {/* Conditional Fields for Church/University Events */}
                {(contactType === "church" || contactType === "university") && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="organisation" className="block mb-2 text-charcoal-900">
                        {contactType === "church" ? "Church name" : "University/College name"}
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                        required
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                      <div>
                        <label htmlFor="location" className="block mb-2 text-charcoal-900">
                          Location (City/Suburb)
                        </label>
                        <input
                          type="text"
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="audienceSize" className="block mb-2 text-charcoal-900">
                          Expected audience size
                        </label>
                        <input
                          type="text"
                          id="audienceSize"
                          value={formData.audienceSize}
                          onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                          placeholder="e.g., 30-50 people"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="preferredDates" className="block mb-2 text-charcoal-900">
                        Preferred dates or timeframe
                      </label>
                      <input
                        type="text"
                        id="preferredDates"
                        value={formData.preferredDates}
                        onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                        placeholder="e.g., June 2026, or flexible"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="venueNotes" className="block mb-2 text-charcoal-900">
                        Venue or additional notes
                      </label>
                      <textarea
                        id="venueNotes"
                        value={formData.venueNotes}
                        onChange={(e) => setFormData({ ...formData, venueNotes: e.target.value })}
                        rows={3}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                        placeholder="Any details about the venue, audience, or special requirements..."
                      />
                    </div>
                  </>
                )}

                {/* Conditional Fields for Hosting Networking Event */}
                {contactType === "host" && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="location" className="block mb-2 text-charcoal-900">
                        Location (City/State)
                      </label>
                      <input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 text-charcoal-900">
                        Tell us about your idea
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                        placeholder="What type of networking event would you like to host? When and where?"
                        required
                      />
                    </div>
                  </>
                )}

                {/* General Enquiry Message */}
                {contactType === "general" && (
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-charcoal-900">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-charcoal-900 focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-600/20"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-copper-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-copper-700 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send message
                </button>

              </>
            )}
          </form>
        ) : (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
              Message sent!
            </h3>
            <p className="text-charcoal-600 mb-6">
              Thank you for getting in touch. We'll respond to your message as soon as possible.
            </p>
            <p className="text-sm text-charcoal-500">
              Expected response time: 2 business days
            </p>
          </div>
        )}
          </div>
        </div>
      </div>
    </section>
  );
}
