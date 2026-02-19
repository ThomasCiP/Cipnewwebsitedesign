import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import clsx from "clsx";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  churchName?: string; // Optional for Invite
  eventType?: string; // Optional for Invite
};

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"general" | "invite">("general");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    // Mock submission
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-charcoal-600">
            We'd love to hear from you. Whether you have a question or want to invite CiP to your church.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => { setActiveTab("general"); setIsSuccess(false); }}
                    className={clsx(
                        "py-3 text-sm font-semibold rounded-lg transition-colors",
                        activeTab === "general" ? "bg-copper-600 text-white shadow-sm" : "bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200"
                    )}
                >
                    General Enquiry
                </button>
                <button
                    onClick={() => { setActiveTab("invite"); setIsSuccess(false); }}
                    className={clsx(
                        "py-3 text-sm font-semibold rounded-lg transition-colors",
                        activeTab === "invite" ? "bg-copper-600 text-white shadow-sm" : "bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200"
                    )}
                >
                    Invite CiP to Speak
                </button>
            </div>

            {isSuccess ? (
                <div className="rounded-md bg-green-50 p-4 text-center">
                    <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
                    <p className="mt-2 text-sm text-green-700">We'll get back to you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="mt-4 text-sm font-medium text-green-800 underline">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-charcoal-900">Name</label>
                        <div className="mt-2">
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-charcoal-900">Email</label>
                        <div className="mt-2">
                            <input
                                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                                type="email"
                                className="block w-full rounded-md border-0 py-1.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>
                    </div>

                    {activeTab === "invite" && (
                        <>
                            <div>
                                <label htmlFor="churchName" className="block text-sm font-medium leading-6 text-charcoal-900">Church / Organisation Name</label>
                                <div className="mt-2">
                                    <input
                                        {...register("churchName", { required: "Organisation name is required" })}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                                    />
                                    {errors.churchName && <p className="mt-1 text-sm text-red-600">{errors.churchName.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="eventType" className="block text-sm font-medium leading-6 text-charcoal-900">Event Type (e.g., Sunday Service, Workshop)</label>
                                <div className="mt-2">
                                    <input
                                        {...register("eventType")}
                                        type="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-charcoal-900">Message</label>
                        <div className="mt-2">
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={4}
                                className="block w-full rounded-md border-0 py-1.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                            />
                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex w-full justify-center rounded-md bg-copper-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-copper-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-600 disabled:opacity-50 disabled:cursor-not-allowed items-center gap-2"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            )}

            <div className="mt-16 flex justify-center gap-8 text-charcoal-500 text-sm">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Sydney, Australia</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@cip.org.au</div>
            </div>
        </div>
      </div>
    </div>
  );
}