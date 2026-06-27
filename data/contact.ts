import { footerContactItems } from "@/data/footer";

export const contactHeading = "Let's talk about your future success!";

export const contactSubtext =
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Reach out to Kalkisena Clinic and let us help you access the care and support you need.";

const phoneItem = footerContactItems.find((item) => item.id === "phone")!;
const emailItem = footerContactItems.find((item) => item.id === "email")!;
const addressItem = footerContactItems.find((item) => item.id === "address")!;

export const contactPhone = {
  label: phoneItem.label,
  value: phoneItem.value,
  icon: phoneItem.icon,
};

export const contactEmail = {
  label: emailItem.label,
  value: emailItem.value,
  icon: emailItem.icon,
};

export const contactAddress = {
  label: "Location",
  value: addressItem.value,
  icon: addressItem.icon,
};

export const contactLocationCoords = {
  lat: 37.1537,
  lng: -83.7619,
  previewZoom: 14,
  modalZoom: 16,
} as const;

export const contactFormLabels = {
  fullName: "Your Full Name",
  email: "Email",
  phone: "Phone Number",
  enquiry: "What type of enquiries do you have?",
  message: "Message",
  submit: "Submit Form",
} as const;

export const contactEnquiryOptions = [
  { value: "", label: "Please Choose" },
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteer" },
  { value: "donation", label: "Donation" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
] as const;

export const contactHumanVerificationLabel = "I am human";
