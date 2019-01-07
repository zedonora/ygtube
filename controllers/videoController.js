import routes from "../routers";
export const home = (req, res) => {
  res.render("Home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  //const {query:{term}} = req; --> req.query.term
  //const searchingBy = req.qeury.term;
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
  //res.render("Search", { pageTitle: "Search", searchingBy:searchingBy });
};

export const getUpload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};
export const videoDetail = (req, res) =>
  res.render("Video Detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });
