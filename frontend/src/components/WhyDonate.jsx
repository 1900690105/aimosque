import React, { useEffect, useState } from "react";

function WhyDonate() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/donationsdata") // update if your backend runs on another port
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((err) => console.error("Error fetching donations:", err));
  }, []);

  return (
    <div className="space-y-6">
      {/* Why Donate Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="font-semibold tracking-tight text-xl">
            Why Donate?
          </div>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <p className="text-sm">
            Your donations help mosques maintain their facilities, provide
            services to the community, and continue their important work.
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                1
              </span>
              <span>Support mosque maintenance and utilities</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                2
              </span>
              <span>Fund educational programs and classes</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                3
              </span>
              <span>Help with community outreach initiatives</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                4
              </span>
              <span>Support charitable activities for those in need</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Donations Card */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="font-semibold tracking-tight text-xl">
            Recent Donations
          </div>
        </div>
        <div className="p-6 pt-0">
          <ul className="space-y-3">
            {donations.length > 0 ? (
              donations.map((donation, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{donation.donor_name || "Anonymous"}</span>
                  <span className="font-medium">₹{donation.amount}</span>
                </li>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">
                No recent donations found.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyDonate;

// import React from "react";

// function WhyDonate() {
//   return (
//     <>
//       <div class="space-y-6">
//         <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
//           <div class="flex flex-col space-y-1.5 p-6">
//             <div class="font-semibold tracking-tight text-xl">Why Donate?</div>
//           </div>
//           <div class="p-6 pt-0 space-y-4">
//             <p class="text-sm">
//               Your donations help mosques maintain their facilities, provide
//               services to the community, and continue their important work.
//             </p>
//             <ul class="text-sm space-y-2">
//               <li class="flex items-start">
//                 <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
//                   1
//                 </span>
//                 <span>Support mosque maintenance and utilities</span>
//               </li>
//               <li class="flex items-start">
//                 <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
//                   2
//                 </span>
//                 <span>Fund educational programs and classes</span>
//               </li>
//               <li class="flex items-start">
//                 <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
//                   3
//                 </span>
//                 <span>Help with community outreach initiatives</span>
//               </li>
//               <li class="flex items-start">
//                 <span class="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
//                   4
//                 </span>
//                 <span>Support charitable activities for those in need</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
//           <div class="flex flex-col space-y-1.5 p-6">
//             <div class="font-semibold tracking-tight text-xl">
//               Recent Donations
//             </div>
//           </div>
//           <div class="p-6 pt-0">
//             <ul class="space-y-3">
//               <li class="flex justify-between items-center text-sm">
//                 <span>Anonymous</span>
//                 <span class="font-medium">₹4,150</span>
//               </li>
//               <li class="flex justify-between items-center text-sm">
//                 <span>Fatima S.</span>
//                 <span class="font-medium">₹2,075</span>
//               </li>
//               <li class="flex justify-between items-center text-sm">
//                 <span>Mohammed A.</span>
//                 <span class="font-medium">₹8,300</span>
//               </li>
//               <li class="flex justify-between items-center text-sm">
//                 <span>Anonymous</span>
//                 <span class="font-medium">₹830</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default WhyDonate;
