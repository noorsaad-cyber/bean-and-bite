import WhatsAppButton from "./WhatsAppButton";

export default function MenuSection() {
  // Sample business configuration
  const businessPhoneNumber = "+962790000000"; // Replace with client's phone number

  const menuItems = [
    {
      id: 1,
      name: "Specialty Spanish Latte",
      price: "$5.50",
      description: "Rich espresso blended with sweetened milk and fresh ice.",
    },
    {
      id: 2,
      name: "Butter Croissant",
      price: "$3.50",
      description: "Freshly baked flaky pastry with authentic French butter.",
    },
  ];

  return (
    <section className="py-12 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="p-6 bg-white rounded-xl shadow-sm border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-stone-800">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-700">{item.price}</span>
                </div>
                <p className="text-stone-600 text-sm mb-4">{item.description}</p>
              </div>
              
              {/* WhatsApp Action Button */}
              <WhatsAppButton
                phoneNumber={businessPhoneNumber}
                productName={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}