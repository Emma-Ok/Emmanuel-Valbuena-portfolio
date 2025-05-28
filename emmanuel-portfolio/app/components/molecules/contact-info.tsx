import { ContactItem } from "@/app/components/atoms/contact-item"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export function ContactInfo() {
  const contactData = [
    { icon: Calendar, label: "Age", value: "23" },
    { icon: MapPin, label: "Residence", value: "Medellín, Colombia" },
    { icon: Phone, label: "Phone", value: "+57 324 576 9767" },
    { icon: Mail, label: "Email", value: "e1valbuena132@gmail.com" },
  ]

  return (
    <div className="space-y-2.5 sm:space-y-3">
      <h3 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Contact Information</h3>
      <div className="space-y-1.5 sm:space-y-2">
        {contactData.map((item, index) => (
          <ContactItem key={index} icon={item.icon} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  )
}
