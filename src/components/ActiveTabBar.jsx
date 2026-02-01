import React from "react";

export const services = [
  { label: "Your One Stop Shop", slug: "your-one-stop-shop" },
  { label: "Pump maintenance", slug: "pump-maintenance" },
  { label: "Valve maintenance", slug: "valve-maintenance" },
  {
    label: "Electrical motors and generators maintenance",
    slug: "electrical-motors-and-generators-maintenance",
  },
  {
    label: "Electrical equipment maintenance",
    slug: "electrical-equipment-maintenance",
  },
  {
    label: "Static equipment and ventilation systems",
    slug: "static-equipment-and-ventilation-system",
  },
  {
    label: "Top Drive overhaul and maintenance",
    slug: "top-drive-overhaul-and-maintenance",
  },
  {
    label: "Instrumentation and control systems maintenance",
    slug: "instrumentation-and-control-systems-maintenance",
  },
  { label: "Asset management solution", slug: "asset-management-solution" },
  { label: "Traning services", slug: "traning-services" },
  { label: "EPC", slug: "epc" },
];

const ActiveTabBar = () => {
  return (
    <nav className="activeTabBar">
      <ul>
        {services.map((item) => (
          <li key={item.slug}>
            <a href={`/services/${item.slug}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ActiveTabBar;
