const localeRedirectScript = `
  try {
    var preferredLocale = localStorage.getItem("preferred-locale");
    window.location.replace(preferredLocale === "id" ? "/id" : "/en");
  } catch (error) {
    window.location.replace("/en");
  }
`;

export default function Page() {
  return <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />;
}
