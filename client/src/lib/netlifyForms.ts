// Submits a Netlify form via AJAX so we can show our own branded /thank-you
// page instead of Netlify's default success page.
//
// A plain full-page POST to a Netlify form returns Netlify's generic success
// page inline (it never hands off to the SPA route). Posting in the background
// and then navigating client-side keeps the user inside our React app.
//
// Forms with a file input (the candidate CV upload) must be sent as multipart
// FormData; everything else goes as url-encoded, which is what Netlify expects.
export async function submitNetlifyForm(
  form: HTMLFormElement,
): Promise<boolean> {
  const formData = new FormData(form);
  const hasFileInput = !!form.querySelector('input[type="file"]');

  const res = hasFileInput
    ? await fetch("/", { method: "POST", body: formData })
    : await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

  return res.ok;
}
