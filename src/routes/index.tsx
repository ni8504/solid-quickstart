import { createEffect, onCleanup } from "solid-js";

function HomePage() {
  createEffect(() => {
    // Create and append Stripe script
    const stripeScript = document.createElement("script");
    stripeScript.async = true;
    stripeScript.src = "https://js.stripe.com/v3/pricing-table.js";
    document.head.appendChild(stripeScript);

    // Cleanup to remove script when component unmounts
    onCleanup(() => {
      document.head.removeChild(stripeScript);
    });
  });

  return (
    <>
      {/* Your existing JSX code */}
      <stripe-pricing-table 
        pricing-table-id="prctbl_1NskZ3E3w74qrgxu2w3V8mnW" 
        publishable-key="pk_live_D48AKbmvPqwUhU5ToTVOcuWU">
      </stripe-pricing-table>
    </>
  );
}

export default HomePage;
