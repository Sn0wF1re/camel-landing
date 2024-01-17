addEventListener("DOMContentLoaded", () => {
  window.helioCheckout(
    document.getElementById("helioCheckoutContainer"),
    {
      paylinkId: "65a81a9eb1dfe4236081b65a",
      network: "test",
      display: "button",
      onSuccess: event => console.log(event),
      onError: event => console.log(event),
      onPending: event => console.log(event),
      onCancel: () => console.log("Cancelled payment"),
      onStartPayment: () => console.log("Starting payment"),
    }
  );
});