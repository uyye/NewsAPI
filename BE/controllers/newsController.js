const axios = require("axios");
const apiKey = process.env.apiKey;

class NewsController {
  static async headlinesNews(req, res, next) {
    const date = new Date();
    const { filter = "" } = req.query;

    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=3&from=${date}&sortBy=popularity&country=us&q=${filter}&apiKey=${apiKey}`
      );
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getNewsByCategory(req, res, next) {
    const { category } = req.params;
    const {
      pageSize = 4,
      page = 1,
      sortBy = "popularity",
      country = "us",
      q = "",
    } = req.query;

    try {
      const { data } = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          category,
          pageSize,
          page,
          sortBy,
          country,
          q,
          apiKey,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async getNews(req, res, next) {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
      );
      if (!data) {
        return res.status(404).json({ message: "News not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

 static async getNewsDetail(req, res, next) {
  try {
    const { title, category } = req.query;

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines`,
      {
        params:{
          apiKey,
          q: title,
          language:'en',
          category
        }
      }
    );

  const news = data.articles.find(article => {
    return article.title === title
  });
    

    if (!news) {
      return res.status(404).json({ message: "Article not found" });
    }
    
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

}

module.exports = NewsController;
