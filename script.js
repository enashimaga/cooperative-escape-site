const fallbackConfig = {
  supportUrl: "https://ko-fi.com/"
};

document.getElementById("year").textContent = new Date().getFullYear();

const supportLink = document.getElementById("support-link");

async function loadConfig() {
  try {
    const response = await fetch("config.json", { cache: "no-store" });
    if (!response.ok) return fallbackConfig;

    const config = await response.json();
    return {
      ...fallbackConfig,
      ...config
    };
  } catch {
    return fallbackConfig;
  }
}

loadConfig().then((config) => {
  if (supportLink && config.supportUrl) {
    supportLink.href = config.supportUrl;
  }
});
