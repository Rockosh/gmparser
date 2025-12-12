const puppeteer = require("puppeteer");
const { processGames } = require("./business_logic/business_logic.cjs");

async function scrapeGames() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
  });

  const page = await browser.newPage();
  const baseUrl = "https://freetp.org/";
  const pageCount = 3;
  let allGames = [];

  async function collectGameCards() {
    try {
      // Скроллим страницу
      await page.evaluate(async () => {
        for (let i = 0; i < 5; i++) {
          window.scrollBy(0, window.innerHeight);
          await new Promise(r => setTimeout(r, 300));
        }
      });

      await page.waitForSelector("#dle-content > div.base", { timeout: 5000 });

      const games = await page.$$eval("#dle-content > div.base", divs =>
        divs.map(div => ({
          title: div.querySelector("h1, h2")?.innerText.trim() || "Без названия",
          image: div.querySelector("img")?.src || "",
          description: div.querySelector("p")?.innerText.trim() || "",
        }))
      );

      allGames.push(...games);
      console.log(`🎯 Найдено карточек игр: ${games.length}`);
    } catch (err) {
      console.warn("❌ Не удалось найти карточки игр на этой странице");
    }
  }

  for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
    const url = pageNum === 1 ? baseUrl : `${baseUrl}page/${pageNum}/`;
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 0 });
      console.log(`✅ Загружена страница: ${url}`);
      await new Promise(r => setTimeout(r, 2000));
      await collectGameCards();
    } catch (err) {
      console.warn(`⚠️ Страница ${url} не загрузилась: ${err.message}`);
    }
  }

  console.log(`\n💾 Всего найдено игр: ${allGames.length}\n`);

  // Сохраняем через бизнес-логику
  await processGames(allGames);
  console.log("✅ Данные переданы в бизнес-логику для сохранения");

  await browser.close();
}

// Запуск парсера
scrapeGames();
